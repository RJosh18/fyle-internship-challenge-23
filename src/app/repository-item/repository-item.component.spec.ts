import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryItemComponent } from './repository-item.component';

describe('RepositoryItemComponent', () => {
  let component: RepositoryItemComponent;
  let fixture: ComponentFixture<RepositoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit repositoryClicked event when clicked', () => {
    const repository = {
      name: 'Test Repo',
      description: 'This is a test repository.',
      topics: ['Angular', 'Testing'],
    };
    let emittedRepository: any;
    component.repositoryClicked.subscribe((repo) => (emittedRepository = repo));

    component.onRepositoryClick();

    expect(emittedRepository).toEqual(repository);
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
});
