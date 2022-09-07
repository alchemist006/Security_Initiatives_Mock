const Books = [
  {
    book: {
      bookId: 1,
      bookName: "Basic Physics",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 9,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/xg9CJrt/Rectangle-18.png",
      pages: 120,
      category: {
        categoryId: 1,
        categoryName: "Social Science",
      },
      currentRead: false,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 2,
      bookName: "Bio Organic Chemistry",
      authorId: 2,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 9,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/FwggVWj/Rectangle-18-3.png",
      pages: 120,
      category: {
        categoryId: 1,
        categoryName: "Social Science",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 2,
      name: "Rohit Mehta",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1100,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 2,
    },
  },
  {
    book: {
      bookId: 3,
      bookName: "Crystal Chemistry",
      authorId: 3,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 9,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/3f2kmJB/Rectangle-18-9.png",
      pages: 120,
      category: {
        categoryId: 1,
        categoryName: "Social Science",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 3,
      name: "Charles Dicken",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 2000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 3,
    },
  },
  {
    book: {
      bookId: 4,
      bookName: "Biology",
      authorId: 4,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 9,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/rQdHndd/Rectangle-7-1.png",
      pages: 120,
      category: {
        categoryId: 1,
        categoryName: "Social Science",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 4,
      name: "Yann Martel",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 2500,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 4,
    },
  },
  {
    book: {
      bookId: 5,
      bookName: "Concise Inorganic Chemistry",
      authorId: 5,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 9,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/9g8gQV2/Rectangle-7-4.png",
      pages: 120,
      category: {
        categoryId: 1,
        categoryName: "Social Science",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 5,
      name: "Sidney Greenbaum",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 3000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 5,
    },
  },
  {
    book: {
      bookId: 6,
      bookName: "Concise Inorganic Chemistry",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/1vd6Snk/Rectangle-13-6.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 7,
      bookName: "Concise Inorganic Chemistry",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/1vd6Snk/Rectangle-13-6.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: false,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 8,
      bookName: "Concise Inorganic Chemistry",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/QPRHYn1/Rectangle-13-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 9,
      bookName: "Heterocycles Chemistry",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/27gNMdB/Rectangle-13-5.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 10,
      bookName: "Inorganic Chemistry",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/SwVk7LW/Rectangle-18-1.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 11,
      bookName: "Principles of Physics",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/QFgsZB6/Rectangle-18-4.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 12,
      bookName: "German History",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/fvC0jm3/Rectangle-18-10.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 13,
      bookName: "Jungle Book",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/Js0N5pD/Rectangle-18-2.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 14,
      bookName: "The Prophet",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/rftgGJR/Rectangle-18-5.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 15,
      bookName: "Learn concepts of Mathematics",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/dQ1G1KH/Rectangle-18-11.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 16,
      bookName: "Basics of Mathematics",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/MpXfCrG/Rectangle-18-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 17,
      bookName: "Advanced Mathematics",
      authorId: 1,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/MpXfCrG/Rectangle-18-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 1,
      name: "Eric Dorn Brose",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 1000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 1,
    },
  },
  {
    book: {
      bookId: 18,
      bookName: "Concise Inorganic Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/1vd6Snk/Rectangle-13-6.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 19,
      bookName: "Concise Inorganic Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/QPRHYn1/Rectangle-13-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 20,
      bookName: "Heterocycles Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/27gNMdB/Rectangle-13-5.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 21,
      bookName: "Inorganic Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/SwVk7LW/Rectangle-18-1.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 22,
      bookName: "Principles of Physics",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/QFgsZB6/Rectangle-18-4.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 23,
      bookName: "German History",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/fvC0jm3/Rectangle-18-10.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 24,
      bookName: "Jungle Book",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/Js0N5pD/Rectangle-18-2.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 25,
      bookName: "The Prophet",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/rftgGJR/Rectangle-18-5.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 26,
      bookName: "Learn concepts of Mathematics",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/dQ1G1KH/Rectangle-18-11.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 27,
      bookName: "Basics of Mathematics",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/MpXfCrG/Rectangle-18-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 28,
      bookName: "Advanced Mathematics",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/MpXfCrG/Rectangle-18-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 29,
      bookName: "Concise Inorganic Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/1vd6Snk/Rectangle-13-6.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 30,
      bookName: "Concise Inorganic Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/QPRHYn1/Rectangle-13-8.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 31,
      bookName: "Heterocycles Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/27gNMdB/Rectangle-13-5.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 32,
      bookName: "Inorganic Chemistry",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/SwVk7LW/Rectangle-18-1.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 33,
      bookName: "Principles of Physics",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/QFgsZB6/Rectangle-18-4.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 34,
      bookName: "German History",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/fvC0jm3/Rectangle-18-10.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
  {
    book: {
      bookId: 35,
      bookName: "Jungle Book",
      authorId: 7,
      description:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      rating: 5,
      peopleRated: 120,
      imageUrl: "https://i.ibb.co/Js0N5pD/Rectangle-18-2.png",
      pages: 120,
      category: {
        categoryId: 2,
        categoryName: "Mathematics",
      },
      currentRead: true,
      readComplete: false,
      bookMarked: true,
    },
    author: {
      id: 7,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      followers: 11000,
      image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
      bookId: 7,
    },
  },
];
export default Books;