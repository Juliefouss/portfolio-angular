import {DateTime} from "luxon";

export class ContactMessage {
  constructor(public nom?: string,
              public prenom?: string,
              public numero?: number,
              public mail?: string,
              public message?: string,
              public date?: DateTime,
             ) { }
}
// création de modèle, une classe ave des propriétés qui va représenter l'objet que l'on va recevoir.
// Ce modèle doit absolument correspondre aux objets que l'on doit recevoir.
