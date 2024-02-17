Project Description: Enter valid github username and it will display all the public repos.

-Install dependencies
npm install

-To run test
ng test

-Unit test case:
1.Tests performed on RepositoryItem using file repository-item.component.spec.ts:
Input: it('should emit repositoryClicked event when clicked', async () => {
      let emittedRepository: any | undefined;

    component.repositoryClicked.subscribe((repo) => {
      emittedRepository = repo;
    });

    fixture.detectChanges();

    component.onRepositoryClick();

    await fixture.whenStable();

    console.log('Emitted Repository:', emittedRepository);
    expect(emittedRepository).toEqual(component.repository);
  });

  it('should render repository details correctly', () => {
    const repository = {
      name: 'Test Repository',
      description: 'This is a test repo.',
      topics: ['Angular', 'Testing'],
    };

    component.repository = repository;

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'Test Repository'
    );
    expect(compiled.querySelector('p').textContent).toContain(
      'This is a test repo.'
    );
    expect(compiled.querySelectorAll('.bg-blue-500').length).toBe(2);
  });
 output:RepositoryItemComponent
   should render repository details correctly
   should emit repositoryClicked event when clicked
   should create
   
2.Tests performed on GitHubServices using file github-service.spec.ts:

Input:it('should be created', () => {
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
Output:GithubService
should get user info
should be created

should get user repositories

<img width="751" alt="image" src="https://github.com/RJosh18/fyle-internship-challenge-23/assets/103954871/fdcf5143-bcd6-4438-af02-afdd08397ebd">

