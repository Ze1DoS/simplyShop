import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все товары'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'sofas',
                    name: 'Диваны'
                },
                {
                    key: 'chkafs',
                    name: 'Шкафы'
                },
                {
                    key: 'desks',
                    name: 'Тумбы'
                },
                {
                    key: 'beds',
                    name: 'Кровати'
                },
                {
                    key: 'shezlongs',
                    name: 'Шезлонги'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories