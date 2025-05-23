export const mockMessages = [
  {
    id: '1',
    sender: 'user1',
    text: 'Hello!',
    timestamp: new Date(),
  },
  {
    id: '2',
    sender: 'bot',
    text: 'Hi there! How can I help you?',
    timestamp: new Date(Date.now() - 1000 * 60),
  },
  {
    id: '3',
    sender: 'user1',
    fileUrl: '/images/mock_image.png',
    type: 'image',
    timestamp: new Date(Date.now() - 1000 * 120),
  },
  {
    id: '4',
    sender: 'bot',
    text: 'Nice image!',
    timestamp: new Date(Date.now() - 1000 * 30),
  },
  {
    id: '5',
    sender: 'user1',
    text: 'Here is a text with an image.',
    fileUrl: '/images/mock_image_2.png',
    type: 'mixed',
    timestamp: new Date(),
  },
  {
    id: '6',
    sender: 'bot',
    fileUrl: '/files/mock_document.pdf',
    type: 'file',
    fileType: 'application/pdf',
    timestamp: new Date(Date.now() - 1000 * 90),
  },
];