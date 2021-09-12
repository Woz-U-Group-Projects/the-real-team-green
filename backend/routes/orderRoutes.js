import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOderToPaid, getMyOrders, getAllOrders, updateOderToShipped } from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').post(protect, addOrderItems).get(protect, admin, getAllOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOderToPaid)
router.route('/:id/shipped').put(protect, admin, updateOderToShipped)



export default router
