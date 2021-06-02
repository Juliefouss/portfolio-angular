export class Realisations{
  constructor(public id?: number,
              public image?: string,
              public nomImage?: string,
              public titre?: string,
              public date?: Date,
              public lien?: string)
  { }
}

// création de modèle, une classe ave des propriétés qui va représenter l'objet que l'on va recevoir.
// Ce modèle doit absolument correspondre aux objets que l'on doit recevoir.
