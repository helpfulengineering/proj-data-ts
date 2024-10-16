import { app, HttpRequest, HttpResponseInit, InvocationContext,
       } from "@azure/functions";


const example_products = [
        {
     medical_products: [
        {
          id: 1,
          name: "IV Bag Hook",
          image:
            "https://field-ready-projects.openknowhow.org/images/HL003-attC88mXadLwq4sLy-400x300.jpg",
          shortDescription: "For IV bags to be hung",
        },
        {
          id: 2,
          name: "Oxygen Supply Fitting",
          image:
            "https://field-ready-projects.openknowhow.org/images/HL002-attmlR243asYolZRO-400x300.jpg",
          shortDescription: "Adapter that connects oxygen supply tubing to standard oxygen systems",
        },
        {
          id: 3,
          name: "Umbilical Cord Clamp",
          image:
            "https://field-ready-projects.openknowhow.org/images/HL001-attG43ftDEHSUFPVG-400x300.jpg",
          shortDescription: "Enclosure of umbilical cords of newborns to prevent sepsis",
        },
        {
          id: 4,
          name: "Finger Brace",
          image:
            "https://field-ready-projects.openknowhow.org/images/HL005-attgxsUzHxoTnTmSP-400x300.jpg",
          shortDescription: "In order to keep a injured index finger immobile",
        },
      ],
      automotive_products: [
        {
          id: 5,
          name: "Water Truck Clamp",
          image:
            "https://field-ready-projects.openknowhow.org/images/WA012-attbQe9vW0QdVGkqD-400x300.jpg",
          shortDescription: "Clamps over the hose on the outlet of a water distribution truck to create a seal",
        },
        {
          id: 6,
          name: "Jerry Can Roller",
          image:
            "https://field-ready-projects.openknowhow.org/images/WA013-attjDSod18c5Ru8PN-400x300.jpeg",
          shortDescription: "Transports 80 litres of drinking water",
        },
        {
          id: 7,
          name: "Make-Fit Pipe Fitting",
          image:
            "https://field-ready-projects.openknowhow.org/images/WA016-attP4Uy56ROfYjAjF-400x300.jpg",
          shortDescription: "Using Make-Fit app a range of 3DP pipe fitting can be produced",
        },
        {
          id: 8,
          name: "Straight Coupler",
          image:
            "https://field-ready-projects.openknowhow.org/images/WA010-attuWhYn15CARwJu4-400x300.jpg",
          shortDescription: "20.5/16.5 straight coupler used to join to pipes.",
        },
      ],
      consumer_products: [
        {
          id: 9,
          name: "Baby Crib",
          image:
            "https://field-ready-projects.openknowhow.org/images/CP002-attt4t66rFpYaqdTj-400x300.jpeg",
          shortDescription: "Provides a safe area for a baby to sleep",
        },
        {
          id: 10,
          name: "Play Pen",
          image:
            "https://field-ready-projects.openknowhow.org/images/CP003-attz3CoRAhIzA5x9v-400x300.jpeg",
          shortDescription: "Provides a safe area for a child to play",
        },
        {
          id: 11,
          name: "Duoband Yagi Antenna",
          image:
            "https://field-ready-projects.openknowhow.org/images/DR002-attJBcwM43eItgWAE-400x300.jpg",
          shortDescription: "3D printed bespoke parts to construct standard antenna design",
        },
        {
          id: 12,
          name: "Rescue Airbag",
          image:
            "https://field-ready-projects.openknowhow.org/images/DR001-att5yL3AEAbc3wDh2-400x300.png",
          shortDescription: "For first responders to remove large blocks of debris",
        },
      ],
        }
];

export async function getOKHs(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    return  { jsonBody: example_products };
};

app.http('getOKHs', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getOKHs
});
