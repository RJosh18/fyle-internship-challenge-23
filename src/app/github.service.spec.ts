import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });

    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user info', () => {
    const username = 'testuser';
    const dummyUser = { login: 'testuser', name: 'Test User' };
    service.getUserInfo(username).subscribe((user: any) => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });
  it('should get user repositories', () => {
    const username = 'testuser';
    const dummyRepos = [{ name: 'repo1' }, { name: 'repo2' }];

    service.getUserRepositories(username).subscribe((repos: any) => {
      expect(repos).toEqual(dummyRepos);
    });
    const req = httpMock.expectOne(
      `${service['baseUrl']}/users/${username}/repos`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);
  });
});
