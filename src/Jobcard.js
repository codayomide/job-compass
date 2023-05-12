function Jobcard() {
  return(
    <div className="job-card">
      <h2 className="job-card__title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, quos!</h2>

      <div className="job-card__price">
        <h3 className="price">$200 - $500</h3>
        <small className="section-name">Budget</small>
      </div>

      <p className="job-card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis at exercitationem quidem nihil, officia repellendus sapiente voluptas repellat. Unde, architecto.</p>

      <div className="job-card__tags-container">
        <button className="tag">tag1</button>
        <button className="tag">tag2</button>
        <button className="tag">tag3</button>
      </div>
    </div>
  )
}

export default Jobcard