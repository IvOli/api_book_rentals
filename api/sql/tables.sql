CREATE TABLE public.users
(
    user_id serial NOT NULL,
    birthdate date NOT NULL,
    email character varying NOT NULL UNIQUE,
    app_name character varying NOT NULL,
    name character varying NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id)
);

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;


CREATE TABLE public.category
(
    category_id serial NOT NULL,
    name character varying (25) NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (category_id)
);

ALTER TABLE IF EXISTS public.category
    OWNER to postgres;

CREATE TABLE public.language
(
    language_id serial NOT NULL,
    name character varying (25) NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (language_id)
);

ALTER TABLE IF EXISTS public.language
    OWNER to postgres;

CREATE TABLE public.genre
(
    genre_id serial NOT NULL,
    name character varying (25) NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (genre_id)
);

ALTER TABLE IF EXISTS public.genre
    OWNER to postgres;

CREATE TABLE public.editorial
(
    editorial_id serial NOT NULL,
    name character varying (25) NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (editorial_id)
);

ALTER TABLE IF EXISTS public.editorial
    OWNER to postgres;

CREATE TABLE public.author
(
    author_id serial NOT NULL,
    name character varying (25) NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (author_id)
);

ALTER TABLE IF EXISTS public.author
    OWNER to postgres;

CREATE TABLE public.client
(
    client_id serial NOT NULL,
    birthdate date NOT NULL,
    age bigint NOT NULL UNIQUE,
    address character varying[] NOT NULL,
    reference character varying[] NOT NULL,
    email character varying NOT NULL UNIQUE,
    phone character varying NOT NULL UNIQUE,
    books_rented smallint NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (client_id)
);

ALTER TABLE IF EXISTS public.client
    OWNER to postgres;


CREATE TABLE public.book
(
    book_id serial NOT NULL,
    author smallint,
    title character varying NOT NULL UNIQUE,
    genre smallint,
    category smallint,
    editorial smallint,
    printing_date date NOT NULL,
    isbn character varying,
    language smallint,
    type smallint,
    image character varying,
    rented smallint NOT NULL,
    quantity smallint NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (book_id),
    CONSTRAINT author FOREIGN KEY (author)
        REFERENCES public.author (author_id) MATCH SIMPLE,
    CONSTRAINT genre FOREIGN KEY (genre)
        REFERENCES public.genre (genre_id) MATCH SIMPLE,
    CONSTRAINT category FOREIGN KEY (category)
        REFERENCES public.category (category_id) MATCH SIMPLE,
    CONSTRAINT editorial FOREIGN KEY (editorial)
        REFERENCES public.editorial (editorial_id) MATCH SIMPLE,
    CONSTRAINT language FOREIGN KEY (language)
        REFERENCES public.language (language_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.book
    OWNER to postgres;

CREATE TABLE public.rental
(
    rental_id serial NOT NULL,
    client smallint,
    start_date date,
    end_date date,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (rental_id),
    CONSTRAINT client FOREIGN KEY (client)
        REFERENCES public.client (client_id) MATCH SIMPLE
);




CREATE TABLE public.book_rental
(
    book_rental_id serial NOT NULL,
    book smallint,
    rental smallint,
    start_date date,
    end_date date,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (book_rental_id),
    CONSTRAINT book FOREIGN KEY (book)
        REFERENCES public.book (book_id) MATCH SIMPLE,
    CONSTRAINT rental FOREIGN KEY (rental)
        REFERENCES public.rental (rental_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.book_rental
    OWNER to postgres;

