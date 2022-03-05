import { client } from '../../../lib/sanity'

const saveTrips = async (req, res) => {
  try {
    const tripDoc = {
      _type: 'trips',
      _id: `${req.body.userWalletAddress}-${Date.now()}`,
      pickup: req.body.pickupLocation,
      dropoff: req.body.dropoffLocation,
      rideTimestamp: new Date(Date.now()).toISOString(),
      price: parseFloat(req.body.price),
      rideCategory: req.body.selectedRide.service,
      passenger: {
        _key: `passenger-${req.body.userWalletAddress} - ${new Date(
          Date.now(),
        ).toISOString()}`,
        _ref: req.body.userWalletAddress,
        _type: 'reference',
      },
    }

    await client.createIfNotExists(tripDoc)

    res.status(200).send({ message: 'success' })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default saveTrips
