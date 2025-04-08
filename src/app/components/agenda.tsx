import EventoComponent from "./evento";

export default function Agenda() {
    return(
        <section>
            <div className="bg-sky-950 pt-10" >
                <div>
                <h1 className="text-4xl font-extrabold py-10 mb-6 text-center text-white">Agenda de Eventos</h1>
                </div>

                <div >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-[1000px] mx-auto py-16">
                    <EventoComponent
                    dia={7}
                    mes="Abril"
                    evento="Reunião Extraordinária de Posse de Novos Membros"
                    hora={14}
                    minuto={30}
                    local="Sede da Academia Acreana de Letras"
                    />
                     <EventoComponent
                    dia={12}
                    mes="Abril"
                    evento="Reunião Extraordinária de Posse de Novos Membros"
                    hora={14}
                    minuto={30}
                    local="Sede da Academia Acreana de Letras"
                    />
                     <EventoComponent
                    dia={7}
                    mes="Abril"
                    evento="Reunião Extraordinária de Posse de Novos Membros"
                    hora={14}
                    minuto={30}
                    local="Sede da Academia Acreana de Letras"
                    />
                     <EventoComponent
                    dia={7}
                    mes="Abril"
                    evento="Reunião Extraordinária de Posse de Novos Membros"
                    hora={14}
                    minuto={30}
                    local="Sede da Academia Acreana de Letras"
                    />
                
                </div>
                </div>

                
            </div>
        </section>
    )
}