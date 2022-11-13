interface FallbackProps {
  error: Error
}

const FallbackComponent = (props: FallbackProps) => {
  return <div>Something went wrong: {props.error.message}</div>
}

export default FallbackComponent;