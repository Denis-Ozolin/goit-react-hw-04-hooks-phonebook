import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, AppTitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')));
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
      {!filter ? (
        <ContactList title="Contacts" contacts={contacts} onDelete={onDeleteContact} />
      ) : (
        <ContactList title="Searched contacts" contacts={filterContactsHandler()} />
      )}
    </Container>
  );
}
