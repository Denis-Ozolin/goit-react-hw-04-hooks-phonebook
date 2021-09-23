import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, AppTitle } from './App.styled';

export function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Baraq Obama', number: '342-34-22' },
    { id: 'id-6', name: 'John Veek', number: '456-45-64' },
    { id: 'id-7', name: 'Gerald Wicher', number: '666-66-66' },
  ];
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || defaultContacts,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    onCheckUniqueName(name)
      ? alert(`${name} is alredy in contacts.`)
      : setContacts(state => [
          {
            id: uuidv4(),
            name,
            number,
          },
          ...state,
        ]);
  };

  const filterUpdateHandler = data => {
    setFilter(data);
  };

  const onCheckUniqueName = value => {
    return contacts.find(({ name }) => name === value);
  };

  const filterContactsHandler = () => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  const onDeleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={formSubmitHandler} />
      <Filter onGetValue={filterUpdateHandler} />
      {contacts.length > 0 &&
        (!filter ? (
          <ContactList title="Contacts" contacts={contacts} onDelete={onDeleteContact} />
        ) : (
          <ContactList title="Searched contacts" contacts={filterContactsHandler()} />
        ))}
    </Container>
  );
}
