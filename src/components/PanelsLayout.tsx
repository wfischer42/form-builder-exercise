import { ReactNode } from 'react'

export type PanelsLayoutProps = {
  mainPanel: ReactNode
  leftPanel?: ReactNode
  rightPanel?: ReactNode
}

// todo: Add panel state management for opening and closing panels from elsewhere in the nav hierarchy

export const PanelsLayout: React.FC<PanelsLayoutProps> = ({ mainPanel, leftPanel, rightPanel }) => {
  return (
    <div className="flex w-screen h-screen justify-center">
      {leftPanel && <div className="w-1/4 shrink-0 grow-0 bg-neutral-100">{leftPanel}</div>}
      <div className="w-1/2 grow bg-neutral-100 max-w-screen-lg">{mainPanel}</div>
      {rightPanel && <div className="w-1/4 shrink-0 grow-0 bg-neutral-100">{rightPanel}</div>}
    </div>
  )
}
