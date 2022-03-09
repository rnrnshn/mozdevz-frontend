import Image from 'next/image'
import codingIcon from '../../assets/icons/programing.svg';
import StatsItem from '../StatsItem';
import { Container, StatsDescription, ItemsContainer } from './styles';

export function StatsContainer() {
  return (
    <Container>
        {/* Description */}
        <StatsDescription>
          <h2 className="statsTitle">
            Impactamos milhares de
            <span className="hightlight"> devz </span>
            e impulsionamos carreiras
          </h2>
          <i className="codingIcon">
            <Image
              src={codingIcon}
              alt='Coding Icon'
              width={90}
              height={90}
            />
          </i>
        </StatsDescription>

        {/* Container */}
        <ItemsContainer>
          <StatsItem
            title={'5000'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
          <StatsItem
            title={'+800'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
          <StatsItem
            title={'+800'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
          <StatsItem
            title={'+100'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
        </ItemsContainer>
      </Container>
  )
}