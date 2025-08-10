test('evilpart: should return empty object if type or body is missing', () => {
  expect(evilpart()).toEqual({});
});

test('evilpart: should parse multipart data correctly', () => {
  const type = 'multipart/form-data; boundary=boundary123';
  const body = `--boundary123
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

This is a test file.

--boundary123
Content-Disposition: form-data; name="image"; filename="image.jpg"
Content-Type: image/jpeg
Content-Transfer-Encoding: base64

VGhpcyBpcyBhIGltYWdlIGp3ZCBmaWxlLg==

--boundary123--`;

  const result = evilpart(type, body);

  expect(result).toEqual({
    file: {
      name: 'file',
      filename: 'test.txt',
      data: 'This is a test file.\n',
    },
    image: {
      name: 'image',
      filename: 'image.jpg',
      data: Buffer.from('This is a image jwd file.', 'base64'),
    },
  });
});

test('evilpart: should handle edge case with missing name or filename', () => {
  const type = 'multipart/form-data; boundary=boundary123';
  const body = `--boundary123
Content-Disposition: form-data; filename="test.txt"
Content-Type: text/plain

This is a test file.

--boundary123
Content-Disposition: form-data; name="image"
Content-Type: image/jpeg
Content-Transfer-Encoding: base64

VGhpcyBpcyBhIGltYWdlIGp3ZCBmaWxlLg==

--boundary123--`;

  const result = evilpart(type, body);

  expect(result).toEqual({
    image: {
      name: 'image',
      filename: undefined,
      data: Buffer.from('This is a image jwd file.', 'base64'),
    },
  });
});