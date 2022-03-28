import express from 'express';
import { sha256, streebog } from "../functions/index.js";

const router = express.Router();


/**
 * @swagger
 * /api/sha256/{text}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: text
 *         required: true
 *         schema:
 *           type: string
 *         description: the string you're encrypting
 *     summary: you'll receive hash encrypted with sha256
 *     responses:
 *       200:
 *         description: encrypted string
 *         content: text/plain; charset=utf-8
 */
router.get('/api/sha256/:text', (req, res) => {
    return res.status(200).json(sha256(req.params.text));
});

/**
 * @swagger
 * /api/streebog/{text}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: text
 *         required: true
 *         schema:
 *           type: string
 *         description: the string you're encrypting
 *     summary: you'll receive hash encrypted with streebog
 *     responses:
 *       200:
 *         description: encrypted string
 *         content: text/plain; charset=utf-8 
 */
router.get('/api/streebog/:text', (req, res) => {
    return res.status(200).json(streebog(req.params.text));
});

export default router