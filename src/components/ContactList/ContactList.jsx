import { List } from './ContactList.styled';

export const ContactList = ({ title, contacts, onDelete }) => {
  return (
    <>
      <h2>{title}:</h2>
      <List>
        {contacts.length
          ? contacts.map(({ id, name, number }) => (
              <li key={id}>
                <p>{name}: {number}</p>
                <button type="button" onClick={() => onDelete(id)}>
                  delete
                </button>
              </li>
            ))
          : null}
      </List>
    </>
  );
};
