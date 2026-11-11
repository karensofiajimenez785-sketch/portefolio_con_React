
export const Screen = (title, children) => {
  return (
    <div>
        <main className="screen">
            <h1 className ="screen-title">{title}</h1>
            {children}
        </main>
    </div>
  )
}

