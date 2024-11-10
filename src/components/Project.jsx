

  function Project(props){
    return(
      <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <p className="title is-4">{props.project.title}</p>
          <p>{props.project.description}</p>
        </div>
        <footer className="card-footer">
          <a 
            href={props.project.githubLink} 
            className="card-footer-item" 
            target="_blank" 
            rel="noopener noreferrer">
            View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );}

  export default Project
