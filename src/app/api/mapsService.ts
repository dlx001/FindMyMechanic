import { Loader } from '@googlemaps/js-api-loader';

export async function searchMechanicShops(): Promise<any[]> {
  try {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      version: "weekly",
      libraries: ["places"]
    });

    await loader.load();

    return new Promise<any[]>((resolve, reject) => {
      const service = new google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        query: 'Mechanic',
        language: 'en-US',
        region: 'us',
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
          resolve(results as any[]); 
        } else {
          console.log('No results');
          resolve([]); 
        }
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
