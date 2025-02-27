import { Brush, Droplets, Shield, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Külső és belső tisztítás",
    description:
      "Professzionális hajótisztítás kívülről és belülről, beleértve a fedélzetet, hajótestet a kabint és tárolóterek tisztítása, szagtalan környezet.",
  },
  {
    icon: Droplets,
    title: "Kárpit tisztítás",
    description:
      "Mélytisztítás a hajó kárpitjának felfrissítésére, amely eltávolítja a szennyeződéseket, foltokat és kellemetlen szagokat, miközben megőrzi az anyag puhaságát és élettartamát.",
  },
  {
    icon: Sparkles,
    title: "Bőrtisztítás",
    description:
      "Kíméletes, de hatékony bőrtisztítás és ápolás, amely megóvja a hajó bőrborítását a kiszáradástól, repedezéstől és elhasználódástól.",
  },
  {
    icon: Shield,
    title: "Tartós pókírtás",
    description:
      "Speciális kezelés a hajón megtelepedő pókok és rovarok ellen, amely hosszú távú védelmet nyújt anélkül, hogy károsítaná a környezetet.",
  },
];

export function Services() {
  return (
    <section className="services py-24">
      {/* <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#002147] mb-16">
          Szolgáltatásaink
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <service.icon
                  className="w-12 h-12 text-[#002147]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-serif text-[#002147] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 h-1 w-16 bg-[#C2B280]" />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
