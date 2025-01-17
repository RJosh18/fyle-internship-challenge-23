import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RepositoryItemComponent } from './repository-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('RepositoryItemComponent', () => {
  let component: RepositoryItemComponent;
  let fixture: ComponentFixture<RepositoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [RepositoryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryItemComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit repositoryClicked event when clicked', async () => {
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
});
