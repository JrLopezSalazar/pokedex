import React from 'react'
import StatsBarProgres from './StatsBarProgres'

const StatBarList = ( {stats}) => {
  return (
    <section>
        <h2>Stats</h2>
        <section>
            {
                stats?.map((stat) => <StatsBarProgres key={stat.name} stat={stat} />)
            }
        </section>
    </section>
  )
}

export default StatBarList