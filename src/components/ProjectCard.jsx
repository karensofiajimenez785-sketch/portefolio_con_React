
export const ProjectCard = ({title, descrption, tags= []}) => {
  return (
<article className="card">
    <h2>{title}</h2>
    <p className="card-text">{descrption}</p>
    <ul className =" tag-list">
        {
            tags.map((tag =>(
                <li key={tag} className="tag"></li>
            )))
        }

    </ul>
</article>  )
}
