import { CalendarDays, Clock3, MapPin } from "lucide-react";

type EventoProps = {
  dia: number;
  mes: string;
  evento: string;
  horario: string;
  local: string;
};

export default function EventoComponent({
  dia,
  mes,
  evento,
  horario,
  local,
}: EventoProps) {
  return (
    <div className="m-4 border-amber-50 border-2 w-fit p-5 items-center mx-auto">
      <div>
        <div className="flex items-center text-2xl gap-4 mb-10">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <p className="text-white text-lg font-bold">{dia}</p>
          </div>
          <div>
            <p className="font-bold text-white flex border-b-2 pt-2">{mes}</p>
          </div>
        </div>

        <div className="bg-sky-950 w-50 text-sky-200 p-4 rounded-md">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-black">{evento}</p>
          </div>

          <div className="flex items-center gap-2 border-t-2 pt-2 mt-2">
            <Clock3 size={18} />
            <p>
              {horario}
            </p>
          </div>

          <div className="flex items-center gap-2 border-t-2 pt-2 mt-2">
            <MapPin size={36} />
            <p>{local}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
