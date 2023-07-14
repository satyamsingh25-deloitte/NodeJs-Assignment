const request = require('supertest');
const app = require('./index.js');

const data = require("./DB/data.json")

describe('GET /matches', () => {
  it('should return all matches', async () => {
    const response = await request(app).get('/matches');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(data.matches));
  });
});


describe('GET /teams', () => {
  it('should return all teams', async () => {
    const response = await request(app).get('/teams');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(data.teams));
  });
});

describe('GET /teams/:teamId/players', () => {
  it('should return player details by team', async () => {
    const teamId = 1;
    const expectedPlayers = data.players.filter(player => player.teamId === teamId);
    const response = await request(app).get(`/teams/${teamId}/players`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(expectedPlayers));
  });
});

describe('GET /teams/:teamId/topScorers', () => {
  it('should return top scorers by team', async () => {
    const teamId = 1;
    const teamPlayers = data.players.filter(player => player.teamId === teamId);
    const maxScore = Math.max(...teamPlayers.map(player => player.score));
    const expectedTopScorers = teamPlayers.filter(player => player.score === maxScore);
    const response = await request(app).get(`/teams/${teamId}/topScorers`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(expectedTopScorers));
  });
});

describe('GET /teams/:teamId/topWicketTakers', () => {
  it('should return top wicket takers by team', async () => {
    const teamId = 1;
    const teamPlayers = data.players.filter(player => player.teamId === teamId);
    const maxWickets = Math.max(...teamPlayers.map(player => player.wickets));
    const expectedTopWicketTakers = teamPlayers.filter(player => player.wickets === maxWickets);
    const response = await request(app).get(`/teams/${teamId}/topWicketTakers`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(expectedTopWicketTakers));
  });
});

describe('GET /matches/today', () => {
  it('should return today\'s matches', async () => {
    const today = new Date().toISOString().split('T')[0];
    const expectedMatches = data.matches.filter(match => match.date === today);
    const response = await request(app).get('/matches/today');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(expectedMatches));
  });
});

describe('GET /matches/:date', () => {
  it('should return matches by date', async () => {
    const date = '2023-07-13';
    const expectedMatches = data.matches.filter(match => match.date === date);
    const response = await request(app).get(`/matches/${date}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(expectedMatches));
  });
});
