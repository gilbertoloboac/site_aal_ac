import EventoComponent from "./evento";

type Agenda = {
    id: number;
    titulo: string;
    dia: number;
    mes: string;
    horario: string;
    local: string;

}

export default async function Agenda() {

    const res = await fetch('http://localhost:8000/api/agenda/')

    if(!res.ok) {
        throw new Error('Falha ao carregar os dados')
    }

    const data = await res.json()
    const agenda: Agenda[] = data.results;

    function formatarHorario(horario: string) {
        const [hora, minutos] = horario.split(":")
        return `${hora}h${minutos}`
    }


    return(
        <section>
            <div className="bg-sky-950 pt-10" >
                <div>
                <h1 className="text-4xl font-extrabold py-10 mb-6 text-center text-white">Agenda de Eventos</h1>
                </div>

                <div >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-[1000px] mx-auto py-16">
                 {agenda.map((evento: Agenda) => (
                     <EventoComponent
                     key={evento.id}
                     dia={evento.dia}
                     mes={evento.mes}
                     evento={evento.titulo}
                     horario={formatarHorario(evento.horario)}
                     local={evento.local}
                     />
                 ))}

                </div>
                </div>

                
            </div>
        </section>
    )
}