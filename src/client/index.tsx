/**
 * loci-dsh, browser half: the "loci 记忆库" sidebar tab. One tab with four
 * inner views (搜索 / 问答 / 记忆 / 状态) talking to the node half's
 * /loci-dsh/api routes same-origin; the node half proxies to loci's
 * serve-http instance, so the browser never talks to loci directly (and never
 * needs CORS from it).
 *
 * dsh-better-sidebar is a soft dependency: the contract below is restated
 * structurally (no value import), so this bundle builds and loads whether or
 * not better-sidebar is installed; without it the tab simply never mounts.
 */
import type { ReactNode } from 'react'
import { LociTab } from './tab.tsx'
import { currentLocale } from './locale.ts'

interface LociTabDescriptor {
  readonly id: string
  readonly title: string | (() => string)
  readonly icon?: ReactNode | ((size: number) => ReactNode)
  readonly order?: number
  readonly single?: boolean
  readonly component: (props: { readonly visible: boolean }) => ReactNode
}

interface BetterSidebarLike {
  registerTab(descriptor: LociTabDescriptor): () => void
}

interface ClientContext {
  effect(body: () => (() => void) | void, label?: string): void
  readonly betterSidebar?: BetterSidebarLike
}

export const inject = ['betterSidebar']

export function apply(ctx: ClientContext): void {
  if (ctx.betterSidebar === undefined) return
  const sidebar = ctx.betterSidebar
  ctx.effect(() => sidebar.registerTab({
    id: 'loci:memory',
    title: () => currentLocale()['tab.title'],
    icon: (size: number) => (
      <span aria-hidden style={{ fontSize: Math.max(12, size - 2), lineHeight: 1 }}>🧠</span>
    ),
    order: 70,
    single: true,
    component: ({ visible }) => <LociTab visible={visible} />,
  }), 'loci-dsh: better-sidebar tab')
}
