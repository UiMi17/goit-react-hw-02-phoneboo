import { Component } from 'react';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import { nanoid } from 'nanoid';

// Застосунок повинен складатися з форми і списку контактів. На поточному кроці реалізуй додавання імені контакту та відображення списку контактів.
// 1.Забираємо значення інпуту після кліку користувача
// 2. Робимо об'єкт, до якого заносимо значення з інпуту
// 3. Відображаємо ім'я у списку

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createContact = ev => {
    this.setState(
      {
        name: ev.currentTarget.elements.name.value,
      },
      () => {
        this.setState(prevState => {
          return {
            contacts: [
              ...prevState.contacts,
              { name: this.state.name, id: nanoid() },
            ],
          };
        });
      }
    );
  };

  handleFormSubmit = ev => {
    ev.preventDefault();

    this.createContact(ev);
  };

  render() {
    return (
      <>
        <ContactsForm handleFormSubmit={this.handleFormSubmit} />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}
