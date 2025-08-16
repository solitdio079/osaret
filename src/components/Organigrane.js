import * as React from "react";

const people = [
  {
    name: "Leslie Alexander",
    role: "Sociologues",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    role: "Anthropologue",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    role: "Démographe",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Ethnographe",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "İslamologue",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Criminologue",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Analyste sécuritaire, réseaux sociaux et radicalisation en ligne.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Magistrat ( justuce & Droit de l'homme)",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Tom Cook",
    role: "Spécialistes du financement du terrorisme, de la criminalité transfrontalière et de l’économie criminelle (trafic d’armes, de drogues et contrebande)",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Organigrame() {
  return (
    <div className="py-6 mb-12 sm:py-12">
      <div className="mx-auto flex flex-col max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className=" mx-auto">
        <div className="relative mx-auto mb-6 w-fit">
          <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
            Ressources humaines
          </h2>
          <span className="from-primary/90 to-primary/50 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
        </div>
          <p className="mt-6 text-lg/8  intersect:motion-preset-slide-right intersect:motion-delay-[400ms]">
            Le Cabinet OSARET réunit en son sein des experts originaires des
            pays du Sahel, aux spécialités variées
          </p>
        </div>
        <ul
          role="list"
          className="grid mx-auto gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="intersect:motion-preset-slide-right intersect:motion-delay-[600ms]"
            >
              <div className="flex items-center gap-x-6">
                <div class="avatar avatar-placeholder">
                  <div class="bg-neutral text-neutral-content w-14 rounded-full">
                    <span class="icon-[tabler--user] size-8"></span>
                  </div>
                </div>
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight ">
                    {person.role}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
