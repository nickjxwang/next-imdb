export default function Results({ results }) {
    return (
        <div>
            {results.map(result => {
                const { id, original_title } = result
                return <div key={id}>{original_title}</div>
            })}
        </div>
    )
}
