import React from 'react';
import { ArrowRight } from 'lucide-react';

// 1. Importa as novas imagens da pasta assets
import carImg from '@/assets/car-accident.jpg';
import truckImg from '@/assets/truck-accident.jpg';
import motoImg from '@/assets/motorcycle-accident.jpg';
import slipImg from '@/assets/slip-and-fall.jpg';
import deathImg from '@/assets/wrongful-death.jpg';
import brainImg from '@/assets/brain-injury.jpg';

// 2. Associa cada imagem ao seu respetivo card
const practiceAreas = [
  {
    title: "Car Accidents",
    highlight: "$5.2 Million",
    subtitle: "Jury Verdict vs. $100k Offer",
    image: carImg, // Imagem atualizada
    link: "/practice-areas/car-accidents"
  },
  {
    title: "Truck Accidents",
    highlight: "$8.5 Million",
    subtitle: "Settlement Secured",
    image: truckImg, // Imagem atualizada
    link: "/practice-areas/truck-accidents"
  },
  {
    title: "Motorcycle Accidents",
    highlight: "20x",
    subtitle: "More Than Initial Insurance Offer",
    image: motoImg, // Imagem atualizada
    link: "/practice-areas/motorcycle-accidents"
  },
  {
    title: "Slip & Fall",
    highlight: "$2.1 Million",
    subtitle: "Premises Liability Verdict",
    image: slipImg, // Imagem atualizada
    link: "/practice-areas/slip-and-fall"
  },
  {
    title: "Wrongful Death",
    highlight: "$12 Million",
    subtitle: "Confidential Settlement",
    image: deathImg, // Imagem atualizada
    link: "/practice-areas/wrongful-death"
  },
  {
    title: "Brain Injuries",
    highlight: "$4.5 Million",
    subtitle: "Trial Verdict for TBI",
    image: brainImg, // Imagem atualizada
    link: "/practice-areas/brain-injuries"
  }
];

const PracticeAreasGrid = () => {
  return (
    // ... (o resto do código continua igualzinho ao que te mandei antes)
// ...