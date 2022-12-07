import React from 'react'
import { Card } from './card'
import coldplay1 from "./assets/coldplay1.jpg";
import coldplay2 from "./assets/coldplay2.jpg";
import coldplay3 from "./assets/coldplay3.jpg";
import coldplay4 from "./assets/coldplay4.jpg";
import coldplay5 from "./assets/coldplay5.jpg";
import Coldplay6 from "./assets/coldplay6.jpg";

export const Home = () => {
  return (
    <div>
        <main>
            <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album example</h1>
                <p class="lead text-dark">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a> <a href="#" class="btn btn-dark my-2">Secondary action</a>
                </p>
                </div>
            </div>
            </section>

            <div class="album py-5 bg-dark">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Card id = "/wallpaper/coldplay1" imagen = {coldplay1} descripcion = "Concierto de Coldplay CDMX Abril 2022"/>
                <Card id = "/wallpaper/coldplay2" imagen = {coldplay2} descripcion = "Music of the spheres world tour "/>
                <Card id = "/wallpaper/coldplay3" imagen = {coldplay3}
                descripcion ="Integrantes de la banda: Chris, Guy, Jhony y will"/>
                <Card id = "/wallpaper/coldplay4" imagen = {coldplay4}
                descripcion = "4 de Abril Foro Sol CDMX 2022"/>
                <Card id = "/wallpaper/coldplay5" imagen = {coldplay5}
                descripcion = " Everything you want's a dream away We are legends, every day. That's what she told him"/>
                <Card id = "/wallpaper/coldplay6" imagen = {Coldplay6}
                descripcion = "Vive una vida que puedas recordar"/>
               </div>
            </div>
            </div>
        </main>
    </div>
  )
}
