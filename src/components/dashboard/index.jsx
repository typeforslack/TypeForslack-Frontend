import React, { Component } from 'react'
// import Header from '../common/header'
import UserStats from './components/userStats'
import ParagraphsCard from './components/paragraphsCard'
import ProgressCard from './components/progressCard'
import styles from './dashboard.module.css'
import Card from './components/card'

export default class Dashboard extends Component {
  cardDetail = [
    { title: '154 days', desc: 'Longest Streak', color: '#2EB67D' },
    { title: '37 days', desc: 'Total Streaks', color: '#2EB67D' },
    { title: '12/7/2020', desc: 'User Since', color: '#F0A500' },
    { title: '171', desc: 'Inactive days', color: '#F00000' },
  ]
  render() {
    return (
      <div className={styles.dashboardMain}>
        <h3 className={styles.title}>User Stats</h3>
        <div className={styles.dashboard}>
          <div className={styles.graphndAverage}>
            <UserStats />
            <ProgressCard />
          </div>
          <div className={styles.cards}>
            <ParagraphsCard />
            <div className={styles.cardHolder}>
              {this.cardDetail.map((cardContent, i) => (
                <Card
                  key={i}
                  title={cardContent.title}
                  desc={cardContent.desc}
                  color={cardContent.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
