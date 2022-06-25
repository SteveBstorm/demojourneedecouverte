export interface Evenement {
  idEvenement: number
  dateDebut: Date
  dateFin: Date
  titre: string
  idCategorie: number
  categorie: string
  prix: number
}

export interface Inscription {
  idInscription : number
  idEvenement : number
  evenement : string
  nom : string
  prenom : string
  confirme : boolean
  email : string
}

export interface EvenementDetail {
  idEvenement: number
  dateDebut: Date
  dateFin: Date
  titre: string
  idCategorie: number
  categorie: string
  prix: number
  inscrit: Inscription[]
}

export interface CreateInscription {
  idEvenement: number
  nom : string
  prenom : string
  email : string
}
