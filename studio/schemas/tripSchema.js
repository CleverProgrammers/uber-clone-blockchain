export const tripSchema = {
  name: 'trips',
  type: 'document',
  title: 'Trips',
  fields: [
    {
      name: 'dropoff',
      type: 'string',
      title: 'Drop off',
    },
    {
      name: 'pickup',
      type: 'string',
      title: 'Pick up',
    },
    {
      name: 'rideCategory',
      type: 'string',
      title: 'Trip type',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Trip price',
    },
    {
      name: 'rideTimestamp',
      type: 'datetime',
      title: 'Trip timestamp',
    },
    {
      name: 'passenger',
      type: 'reference',
      title: 'Passenger',
      to: [{ type: 'users' }],
    },
  ],
}
