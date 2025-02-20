// Importo l'hook useState da React per gestire lo stato del componente
import { useState } from "react";

// Definizione dei dati iniziali dei post
const initialPosts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        autore: "Mario Rossi",
        contenuto: "JavaScript è un linguaggio di scripting lato client ampiamente utilizzato per lo sviluppo web.",
        categoria: "JavaScript",
        published: true,
    },
    {
        id: 2,
        title: "Guida a Node.js",
        autore: "Luca Bianchi",
        contenuto: "Node.js è un runtime JavaScript lato server basato su V8, che permette di costruire applicazioni scalabili.",
        categoria: "Node.js",
        published: true,
    },
    {
        id: 3,
        title: "Express: Creare un server",
        autore: "Giulia Verdi",
        contenuto: "Express è un framework minimalista per Node.js che facilita la creazione di server web.",
        categoria: "Node.js",
        published: true,
    },
    {
        id: 4,
        title: "CSS Flexbox e Grid",
        autore: "Francesca Neri",
        contenuto: "Flexbox e Grid sono strumenti potenti per il layout CSS moderno.",
        categoria: "CSS",
        published: true,
    },
];

// Stato iniziale del form (valori vuoti)
const initialFormData = {
    title: "",
    autore: "",
    contenuto: "",
    categoria: "",
    published: false,
};

const PostForm = () => {
    // Stato per la gestione dei post
    const [posts, setPosts] = useState(initialPosts);
    // Stato per la gestione dei dati del form
    const [formData, setFormData] = useState(initialFormData);

    // Funzione per gestire il cambiamento dei campi del form
    function handleFormData(e) {
        // Determina il valore in base al tipo di input (se checkbox prende il valore booleano checked, altrimenti il valore normale)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        // Aggiorna lo stato del form con i nuovi dati inseriti
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    // Funzione per gestire l'invio del form
    function handleSubmit(e) {
        e.preventDefault(); // Previene il comportamento di default del form (refresh della pagina)

        // Aggiunge il nuovo post alla lista, generando un ID univoco
        setPosts((currentPosts) => [
            ...currentPosts,
            { id: currentPosts.length + 1, ...formData },
        ]);

        // Reset del form dopo l'invio
        setFormData(initialFormData);
    }

    return (
        <>
            {/* Titolo del form */}
            <h1>Gestione dei Post</h1>

            {/* Form per l'inserimento di un nuovo post */}
            <form id="formPost" onSubmit={handleSubmit}>
                {/* Campo per il titolo del post */}
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder="Inserisci titolo post"
                />

                {/* Campo per il nome dell'autore */}
                <input
                    type="text"
                    name="autore"
                    onChange={handleFormData}
                    value={formData.autore}
                    placeholder="Nome autore"
                />

                {/* Campo per il contenuto del post */}
                <textarea
                    name="contenuto"
                    onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder="Contenuto post"
                ></textarea>

                {/* Campo per la categoria */}
                <input
                    type="text"
                    name="categoria"
                    onChange={handleFormData}
                    value={formData.categoria}
                    placeholder="Categoria post"
                />

                {/* Checkbox per lo stato di pubblicazione del post */}
                <label htmlFor="published">Pubblicato</label>
                <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleFormData}
                    id="published"
                />

                {/* Bottone per l'invio del form */}
                <button type="submit">Aggiungi</button>
            </form>

            {/* Lista dei post presenti nello stato */}
            {posts.map((post) => (
                <div className="postItem" key={post.id}>
                    {/* Titolo del post */}
                    <h2>{post.title}</h2>
                    {/* Nome dell'autore */}
                    <h3>{post.autore}</h3>
                    {/* Contenuto del post */}
                    <p>{post.contenuto}</p>
                    {/* Categoria del post */}
                    <h5>{post.categoria}</h5>
                    {/* Stato di pubblicazione del post */}
                    <span>{post.published ? "Post pubblicato" : "Post non pubblicato"}</span>
                </div>
            ))}
        </>
    );
};

export default PostForm;
