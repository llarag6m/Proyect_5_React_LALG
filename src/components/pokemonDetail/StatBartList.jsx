import BarPogresStat from "./BarPogresStat"

const StatBartList = ({stats}) => {
  return (
    <section className="m-10">
      <br />
        <h2 >Stats <hr /></h2>
        <section>
            {
                stats?.map((stat) => <BarPogresStat key={stat.name} stat={stat}/>)
            }
        </section>
    </section>
  )
}
export default StatBartList