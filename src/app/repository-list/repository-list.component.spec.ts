import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryListComponent } from './repository-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { RepositoryItemComponent } from '../repository-item/repository-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [RepositoryListComponent, RepositoryItemComponent],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
