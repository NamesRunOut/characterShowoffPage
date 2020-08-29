import React from 'react';
import a0 from '../images/a0.jpg'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import a2e from '../images/a2e.jpg'
import a3 from '../images/a3.jpg'
import a3e from '../images/a3e.jpg'
import a4 from '../images/a4.jpg'
import a4e from '../images/a4e.jpg'

const abilities = [
  {
        id: "1",
        name: "Bonetooth Necklace",
        imageNormal: a0,
        imageEmpowered: "",
        textNormal: "Innate: Takedowns within 1.5seconds of being damaged by Rengar grant him a Trophy per unique enemy champion, up to 5 trophies. There is a possibility of obtaining a 6th throphy during the event 'The Hunt is on!', through killing Kha'Zix. Trophies grant bonus attack damage.",
        textEmpowered: false
  },
  {
        id: "2",
        name: "Unseen Predator",
        imageNormal: a1,
        imageEmpowered: "",
        textNormal: "Passive: Rengar generates 1 Ferocity whenever he casts a basic ability. Reaching 4 Ferocity makes his next basic ability empowered, granting an additional cast along with bonus movement speed for 1.5 seconds at the cost of all Ferocity. All Ferocity is lost after being out of combat for 8 seconds. While in brush, Rengar's basic attacks gain 725 range and cause him to leap to enemies beyond his normal melee range. Leaping with 0 Ferocity generates 1 Ferocity.",
        textEmpowered: false
  },
  {
        id: "3",
        name: "Savagery",
        imageNormal: a2,
        imageEmpowered: a2e,
        textNormal: "Rengar's next two basic attacks within 3 seconds gain 40% bonus attack speed, with the first also becoming an unstoppable basic attack, gaining 25 bonus range and dealing bonus physical damage.",
        textEmpowered: "Empowered: Savagery's bonus physical damage is modified and grants Rengar bonus attack speed for 5 seconds."
  },
  {
        id: "4",
        name: "Battle Roar",
        imageNormal: a3,
        imageEmpowered: a3e,
        textNormal: "Rengar lets out a battle roar, dealing magic damage to nearby enemies and healing himself for 50% of the damage he's taken in the last 1.5 seconds. This is 75% effective vs monsters.",
        textEmpowered: "Empowered: Battle Roar's magic damage is modified and additionally cleanses Rengar of all Stun icon crowd control."
  },
  {
        id: "5",
        name: "Bola Strike",
        imageNormal: a4,
        imageEmpowered: a4e,
        textNormal: "Rengar throws a bola in the target direction, dealing physical damage to the first enemy hit and slowing them for 1.75 seconds.",
        textEmpowered: "Empowered: Bola Strike's physical damage is modified and roots its target for 1.75 seconds."
  }
]



export default abilities
