test.js

const http = require("http");
const { jest } = require("@jest/globals");
const evilpart = require("./evilpart");

jest.mock("http");

describe("Server tests", () => {
  test("GET request - happy path", () => {
    const req = {
      method: "GET",
    };
    const res = {
      statusCode: 0,
      setHeader: jest.fn(),
      end: jest.fn(),
    };

    http.createServer.mock.calls[0][0](req, res);

    expect(res.statusCode).toBe(200);
    expect(res.setHeader).toHaveBeenCalledWith("Content-Type", "text/html; charset=utf-8");
    expect(res.end).toHaveBeenCalled();
  });

  test("POST request - happy path", () => {
    const req = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      on: jest.fn((event, callback) => {
        if (event === "data") {
          callback('{"key": "value"}');
        } else if (event === "end") {
          callback();
        }
      }),
    };
    const res = {
      statusCode: 0,
      setHeader: jest.fn(),
      end: jest.fn(),
    };

    http.createServer.mock.calls[0][0](req, res);

    expect(res.statusCode).toBe(200);
    expect(res.setHeader).toHaveBeenCalledWith("Content-Type", "text/plain; charset=utf-8");
    expect(res.end).toHaveBeenCalledWith(JSON.stringify(evilpart("application/json", '{"key": "value"}'), null, 2));
  });

  test("POST request - edge case", () => {
    const req = {
      method: "POST",
      headers: {
        "content-type": "text/plain",
      },
      on: jest.fn((event, callback) => {
        if (event === "data") {
          callback('{"key": "value"}');
        } else if (event === "end") {
          callback();
        }
      }),
    };
    const res = {
      statusCode: 0,
      setHeader: jest.fn(),
      end: jest.fn(),
    };

    http.createServer.mock.calls[0][0](req, res);

    expect(res.statusCode).toBe(200);
    expect(res.setHeader).toHaveBeenCalledWith("Content-Type", "text/plain; charset=utf-8");
    expect(res.end).toHaveBeenCalledWith(JSON.stringify(evilpart("text/plain", '{"key": "value"}'), null, 2));
  });
});