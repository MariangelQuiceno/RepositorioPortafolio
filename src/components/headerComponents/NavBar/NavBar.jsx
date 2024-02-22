import React from 'react'
import { Item } from '../Item/Item'

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <Item link="#" content = 'Inicio' />
        <Item link="#" content = 'Acerca de mi' />
        <Item link="#" content = 'Proyectos' />
        <Item link="#" content = 'Experiencia' />
      </ul>
    </nav>
  )
}