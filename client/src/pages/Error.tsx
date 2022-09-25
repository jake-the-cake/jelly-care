export const Error = ( { type }: any ) => {

  switch ( type ) {
    case 'unknown':
      return (
        <>
          Something happened that should never happen...
        </>
      )
    default:
      return (
        <>
          Error.
        </>
      )
  }
}