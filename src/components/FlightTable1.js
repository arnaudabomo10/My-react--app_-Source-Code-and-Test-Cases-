import React, { useEffect, useState } from 'react';

const FlightTable1 = () => {
  // État pour stocker les vols et l'état de chargement
  const [flights, setFlights] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Récupérer la clé API depuis l'environnement
  const apiKey = process.env.REACT_APP_AIR_API_KEY;

  // useEffect pour appeler l'API lors du premier rendu du composant
  useEffect(() => {
    console.log(apiKey); // Vérifie si la clé API est bien lue

    const getFlights = async () => {
      try {
        // Appel à l'API AviationStack avec la clé API
        const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${apiKey}`);
        const data = await response.json();
        
        // Vérifier si les données sont valides
        if (data && data.data) {
          setFlights(data.data); // Mettre à jour l'état des vols
        } else {
          console.error('Données invalides:', data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des vols:', error);
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    getFlights(); // Appeler la fonction pour récupérer les vols
  }, [apiKey]); // [apiKey] pour s'assurer que l'effet dépend de la clé API

  // Afficher un message de chargement pendant que les données sont récupérées
  if (loading) return <div>Loading...</div>;

  // Afficher un message si aucun vol n'est trouvé
  if (flights.length === 0) return <div>Aucun vol trouvé.</div>;

  // Retourner le tableau des vols une fois les données chargées
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom de l'aéroport</th>
          <th>Code IATA</th>
          <th>Compagnie aérienne</th>
          <th>Statut</th>
          {/* Ajoutez d'autres en-têtes selon les besoins */}
        </tr>
      </thead>
      <tbody>
        {flights.map(flight => (
          <tr key={flight.flight.iata}>
            <td>{flight.flight.iata}</td>
            <td>{flight.departure.airport}</td>
            <td>{flight.departure.iata}</td>
            <td>{flight.airline.name}</td>
            <td>{flight.flight_status}</td>
            {/* Ajoutez d'autres cellules selon les données */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable1;
