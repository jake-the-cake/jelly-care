interface MainCardProps {
  content: JSX.Element
}

export const MainCard = ( { content }: MainCardProps ) => {
  return (
    <div className="container-90 flex-1 shadow-lg-light bg-orange">
      { content }
    </div>
  )
}