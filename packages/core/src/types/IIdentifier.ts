/**
 * Identifier interface
 * @public
 */
export interface IIdentifier {
  /**
   * Decentralized identifier
   */
  did: string

  /**
   * Optional. Identifier alias. Can be used to reference an object in an external system
   */
  alias?: string

  /**
   * Identifier provider name
   */
  provider: string

  /**
   * Controller key id
   */
  controllerKeyId?: string

  /**
   * Array of managed keys
   */
  keys: IKey[]

  /**
   * Array of services
   */
  services: IService[]
}

/**
 * Cryptographic key type
 * @public
 */
export type TKeyType = 'Ed25519' | 'Secp256k1'

/**
 * Cryptographic key
 * @public
 */
export interface IKey {
  /**
   * Key ID
   */
  kid: string

  /**
   * Key Management System
   */
  kms: string

  /**
   * Key type
   */
  type: TKeyType

  /**
   * Public key
   */
  publicKeyHex: string

  /**
   * Optional. Private key
   */
  privateKeyHex?: string

  /**
   * Optional. Key metadata. Can be used to store auth data to access remote kms
   */
  meta?: object | null
}

/**
 * Identifier service
 * @public
 */
export interface IService {
  /**
   * ID
   */
  id: string

  /**
   * Service type
   */
  type: string

  /**
   * Endpoint URL
   */
  serviceEndpoint: string

  /**
   * Optional. Description
   */
  description?: string
}
