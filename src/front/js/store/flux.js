const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        apiUrl: "https://playground.4geeks.com/contact/agendas/Sergio",
        contacts: [],
        contactToEdit: {},
        contactToConfirmationToDelete: {},
        host_swapi: "https://www.swapi.tech/api/",
        favorites: []
      },
      actions: {
        updateContactToEdit: (contact) => {
          setStore({ contactToEdit: contact });
        },
        deleteContactToConfirmationToDelete: (contact) => {
          setStore({ contactToConfirmationToDelete: contact });
        },
        getContacts: async () => {
          const actions = getActions();
          const store = getStore();
          try {
            const response = await fetch(store.apiUrl);
            if (response.status === 404) {
              await actions.createAgenda();
              return;
            }
            const data = await response.json();
            setStore({ contacts: data.contacts });
          } catch (e) {
            console.error("Error al obtener los contactos:", e);
          }
        },
        createAgenda: async () => {
          const store = getStore();
          try {
            await fetch(store.apiUrl, {
              method: "POST",
            });
          } catch (e) {
            console.error("Error al crear la agenda:", e); 
          }
        },
        createContact: async (contact) => {
          const store = getStore();
          try {
            const response = await fetch(`${store.apiUrl}/contacts`, {
              method: "POST",
              body: JSON.stringify(contact),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              console.log("Contacto creado");
            }
          } catch (e) {
            console.error("Error al crear el contacto:", e);
          }
        },
        updateContact: async (id, contact) => {
          const store = getStore();
          const actions = getActions();
          try {
            const response = await fetch(`${store.apiUrl}/contacts/${id}`, {
              method: "PUT",
              body: JSON.stringify(contact),
              headers: { "Content-Type": "application/json" },
            });
            await response.json();
            actions.getContacts(); // Actualiza la lista de contactos
          } catch (e) {
            console.log("Error al actualizar el contacto:", e);
          }
        },
        deleteContact: async (id) => {
          try {
            const store = getStore();
            const response = await fetch(`${store.apiUrl}/contacts/${id}`, {
              method: "DELETE",
            });
            if (!response.ok) {
              alert("No se puede borrar el contacto");
              throw new Error("No se pudo borrar el contacto");
            } else {
              const filteredContacts = store.contacts.filter(
                (contact) => contact.id !== id
              );
              setStore({ contacts: filteredContacts });
            }
          } catch (e) {
            console.error("Error al eliminar el contacto:", e);
          }
        },
        getCharactersLS: async () => {
          if(localStorage.getItem("charactersLS")){
            setStore ({charactersLS: JSON.parse(localStorage.getItem("charactersLS"))})
            return
          }
          const response = await fetch (`${getStore().host_swapi}/people`)
          return
          const data = await reponse.json();
          setStore({charactersLS : data.results})
          localStorage.setItem("charactersLS. JSON.stringify(data.results")
          },
        addFavorites: (newFavorite) => {
          setStore({ favorites: [...getStore().favorites, newFavorite]})
        },
        removeFavorites: (item) => {
          const newFavorite=getStore().favorites.filter((element) => element !== item)
        },

      },
    };
  };
  
  export default getState;
  