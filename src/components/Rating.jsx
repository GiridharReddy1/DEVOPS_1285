function Rating({ value }) {
  return (
    <div className="rating" aria-label={`Rating ${value} out of 5`}>
      <span>★★★★★</span>
      <b>{value}</b>
    </div>
  )
}

export default Rating